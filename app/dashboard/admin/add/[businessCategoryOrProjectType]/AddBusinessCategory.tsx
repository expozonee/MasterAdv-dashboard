"use client";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
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
import type { Alert } from "../../page";
import { useState } from "react";
import ErrorAlert from "../../ErrorAlert";

const rubikText = Rubik({ weight: ["500"], subsets: ["hebrew"] });

const formSchema = z.object({
  name: z.string().min(1, { message: "שם חובה" }).max(15),
  slug: z.string().min(1, { message: "שם באנגלית חובה" }).max(15),
  businessType: z.string().min(1, { message: "סוג חובה" }),
});

const BUSINESS_CATEGORIES: {
  name: string;
  slug: string;
}[] = [];

type BusinessTypesData = {
  name: string;
  slug: string;
};

export function AddBusinessCategory() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const {
    isLoading,
    isError,
    isSuccess,
    data: businessTypes,
  } = useQuery({
    queryKey: ["businessTypes"],
    queryFn: async () => {
      const response: BusinessTypesData[] = await axios
        .get("http://localhost:3000/api/categories", {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.data);

      return response.map((businessType) => ({
        name: businessType.name,
        slug: businessType.slug,
      }));
    },
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      businessType: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const result = await add({
      name: values.name,
      slug: values.slug,
      categoryOrType: "businessCategory",
      businessTypeName: values.businessType,
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
      <h1 className="text-white text-center text-xl">הוספת קטגוריה</h1>
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
                <FormLabel className="text-lg">סוג</FormLabel>
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
          <Button
            className="w-full text-lg bg-gold hover:bg-red-500"
            type="submit"
          >
            הוספת קטגוריה
          </Button>
        </form>
      </Form>
      {alerts.length > 0 && <ErrorAlert key={Math.random()} alerts={alerts} />}
    </div>
  );
}
