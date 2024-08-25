import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Rubik } from "next/font/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "@/app/dashboard/admin/page";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Project } from "@/types/project/Project";
import ErrorAlert from "@/app/dashboard/admin/ErrorAlert";
import { usePathname, useRouter } from "next/navigation";

const rubikText = Rubik({ weight: ["500"], subsets: ["hebrew"] });

const formSchema = z.object({
  isSpecial: z.string().min(1, { message: "סוג חובה" }),
  businessType: z.string().min(1, { message: "סוג חובה" }),
  businessCategory: z.string().min(1, { message: "סוג חובה" }),
  projectType: z.string().min(1, { message: "סוג חובה" }),
});

type CategoriesData = {
  businessTypeId: string;
  name: string;
  slug: string;
  businessCategories: {
    businessCategoryId: string;
    name: string;
    slug: string;
    projectTypes: {
      projectTypeId: string;
      name: string;
      slug: string;
    }[];
  }[];
};

type businessCategories = {
  businessCategoryId: string;
  name: string;
  slug: string;
  projectTypes: {
    projectTypeId: string;
    name: string;
    slug: string;
  }[];
};

type ProjectDataUpdateForm = {
  projectData: Project;
};

export function ProjectDataUpdateForm({ projectData }: ProjectDataUpdateForm) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [businessCategories, setBusinessCategories] = useState<
    businessCategories[] | undefined
  >(undefined);
  const [projectTypes, setProjectTypes] = useState<
    { projectTypeId: string; name: string; slug: string }[] | undefined
  >(undefined);

  // fetching the categories data
  const {
    isLoading,
    isError,
    isSuccess: Test,
    data: businessTypes,
  } = useQuery({
    queryKey: ["businessTypes", "projectTypes"],
    queryFn: async () => {
      const response: CategoriesData[] = await axios
        .get("https://www.masteradv.vip/api/categories", {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.data);

      return response;
    },
  });

  useEffect(() => {
    const businessCategories = businessTypes?.find((businessTypeToCheck) => {
      return businessTypeToCheck.name === projectData.businessType.name;
    })?.businessCategories;

    setBusinessCategories(businessCategories);

    const projectTypes = businessCategories?.find((category) => {
      return category.name === projectData.businessCategory.name;
    })?.projectTypes;

    setProjectTypes(projectTypes);
  }, [projectData, businessTypes, isLoading]);

  const { mutate } = useMutation({
    mutationKey: ["modifyProjectData"],
    mutationFn: async (data: {
      projectId: string;
      isSpecial: string;
      businessType: string;
      businessCategory: string;
      projectType: string;
    }) => {
      const response = await axios.post(
        "https://www.masteradv.vip/api/projects",
        {
          projectId: data.projectId,
          isSpecial: data.isSpecial,
          businessType: data.businessType,
          businessCategory: data.businessCategory,
          projectType: data.projectType,
        }
      );

      if (response.data.error) {
        setAlerts([
          {
            type: "error",
            text: response.data.error,
          },
        ]);
      } else {
        setAlerts([
          {
            type: "success",
            text: "הפרוייקט עודכן בהצלחה",
          },
        ]);
      }

      console.log(response.data);
    },
  });

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts([]);
      }, 3000);

      // Clear the timer when the component unmounts or when alerts change
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  // handle click on business type
  function handleClickBusinessType(
    businessType: string,
    onChange: (...event: any[]) => void
  ) {
    onChange(businessType);
    const businessCategories = businessTypes?.find((businessTypeToCheck) => {
      return businessTypeToCheck.name === businessType;
    })?.businessCategories;

    setBusinessCategories(businessCategories);
  }

  // handle click on business category
  function handleClickBusinessCategory(
    businessCategory: string,
    onChange: (...event: any[]) => void
  ) {
    onChange(businessCategory);
    const projectTypes = businessCategories?.find((category) => {
      return category.name === businessCategory;
    })?.projectTypes;

    setProjectTypes(projectTypes);
  }

  // delete project
  async function handleDelete(projectId: string, imageUrl: string) {
    const response = await axios
      .delete("http://localhost:3000/api/projects", {
        data: {
          projectId,
          imageUrl,
        },
      })
      .then((res) => res.data);

    if (response.success) {
      setAlerts([
        {
          type: "success",
          text: "הפרוייקט נמחק בהצלחה",
        },
      ]);

      const path = pathname.split("project")[0];
      console.log(path);
      router.push(`${path}`);
    } else {
      setAlerts([
        {
          type: "error",
          text: response.error,
        },
      ]);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isSpecial: projectData.isSpecial,
      businessType: projectData.businessType.name,
      businessCategory: projectData.businessCategory.name,
      projectType: projectData.projectType.name,
    },
  });

  async function onSubmit(
    values: z.infer<typeof formSchema>,
    e?: React.BaseSyntheticEvent
  ) {
    e?.preventDefault();
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values);

    mutate({
      projectId: projectData.projectId,
      isSpecial: values.isSpecial,
      businessType: values.businessType,
      businessCategory: values.businessCategory,
      projectType: values.projectType,
    });
  }

  if (!session) return null;

  return (
    <section className="w-11/12 p-6 mt-5 mx-auto bg-white rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="isSpecial"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">האם מיוחד?</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger dir="rtl">
                      <SelectValue placeholder="האם מיוחד?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["כן", "לא"]?.map((isSpecial) => (
                      <SelectItem
                        dir="rtl"
                        className={`${rubikText.className}`}
                        key={isSpecial}
                        value={isSpecial}
                      >
                        {isSpecial}
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
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">סוג עסק</FormLabel>
                <Select
                  onValueChange={(value) =>
                    handleClickBusinessType(value, field.onChange)
                  }
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
                <FormLabel className="text-lg">קטגוריית עסק</FormLabel>
                <Select
                  onValueChange={(value) =>
                    handleClickBusinessCategory(value, field.onChange)
                  }
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger dir="rtl">
                      <SelectValue placeholder="בחר סוג" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {businessCategories?.map((businessCategory) => (
                      <SelectItem
                        dir="rtl"
                        className={`${rubikText.className}`}
                        key={businessCategory.businessCategoryId}
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
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">סוג פרוייקט</FormLabel>
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
                    {projectTypes?.map((businessType) => (
                      <SelectItem
                        dir="rtl"
                        className={`${rubikText.className}`}
                        key={businessType.projectTypeId}
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
            עדכון פרוייקט
          </Button>
          <Button
            type="button"
            color="red"
            onClick={async () =>
              await handleDelete(projectData.projectId, projectData.imageUrl)
            }
            className="w-full text-lg bg-red-500 hover:bg-red-800"
          >
            מחיקת פרוייקט
          </Button>
        </form>
      </Form>
      {alerts.length > 0 && <ErrorAlert key={Math.random()} alerts={alerts} />}
    </section>
  );
}
