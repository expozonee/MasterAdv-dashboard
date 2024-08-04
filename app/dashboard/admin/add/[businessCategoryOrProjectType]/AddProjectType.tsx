"use client";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Rubik } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { add } from "@/utils/add";
import { useState } from "react";
import { Alert } from "../../page";
import ErrorAlert from "../../ErrorAlert";

const rubikText = Rubik({ weight: ["500"], subsets: ["hebrew"] });

const formSchema = z.object({
  name: z.string().min(1, { message: "שם חובה" }).max(15),
  slug: z.string().min(1, { message: "שם באנגלית חובה" }).max(15),
  businessType: z.string().min(1, { message: "סוג חובה" }),
  businessCategory: z.string().min(1, { message: "סוג חובה" }),
});

const BUSINESS_CATEGORIES: {
  name: string;
  slug: string;
}[] = [];

type BusinessTypesWithBusinessCategoriesData = {
  name: string;
  slug: string;
  businessCategories: {
    name: string;
    slug: string;
  }[];
};

export function AddProjectType() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const [businessCategory, setBusinessCategory] = useState<
    { name: string; slug: string }[] | undefined
  >(undefined);
  const {
    isLoading,
    isError,
    isSuccess,
    data: businessTypes,
  } = useQuery({
    queryKey: ["businessTypes", "projectTypes"],
    queryFn: async () => {
      const response: BusinessTypesWithBusinessCategoriesData[] = await axios
        .get("http://localhost:3000/api/categories", {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.data);

      return response;
    },
  });

  function handleClick(
    businessType: string,
    onChange: (...event: any[]) => void
  ) {
    onChange(businessType);
    const businessCategories = businessTypes?.find((category) => {
      return category.name === businessType;
    })?.businessCategories;

    setBusinessCategory(businessCategories);
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      businessType: "",
      businessCategory: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const result = await add({
      name: values.name,
      slug: values.slug,
      categoryOrType: "projectType",
      businessTypeName: values.businessType,
      businessCategoryName: values.businessCategory,
    });

    if (result.isError) {
      setAlerts([{ type: "error", text: result.message }]);
    } else {
      setAlerts((prev) => [...prev, { type: "success", text: result.message }]);
    }
  }

  return (
    <div
      className={`w-2/5 mx-auto mt-20 ${rubikText.className} border-2 border-gold p-8 rounded-lg`}
    >
      <h1 className="text-white text-center text-xl">הוספת סוג פרוייקט</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">שם</FormLabel>
                <FormControl>
                  <Input placeholder="שם" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">שם באנגלית</FormLabel>
                <FormControl>
                  <Input placeholder="שם באנגלית" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">סוג עסק</FormLabel>
                <Select
                  onValueChange={(value) => handleClick(value, field.onChange)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger dir="rtl">
                      <SelectValue placeholder="בחר סוג" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {businessTypes?.map((businessType) => (
                      <SelectItem
                        dir="rtl"
                        className={`${rubikText.className}`}
                        key={businessType.slug}
                        value={businessType.name}
                      >
                        {businessType.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">קטגוריה עסק</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger dir="rtl">
                      <SelectValue placeholder="בחר סוג" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {businessCategory?.map((businessCategory) => (
                      <SelectItem
                        dir="rtl"
                        className={`${rubikText.className}`}
                        key={businessCategory.slug}
                        value={businessCategory.name}
                      >
                        {businessCategory.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full text-lg bg-gold hover:bg-red-500"
            type="submit"
          >
            הוספת סוג פרוייקט
          </Button>
        </form>
      </Form>
      {alerts.length > 0 && <ErrorAlert key={Math.random()} alerts={alerts} />}
    </div>
  );
}
