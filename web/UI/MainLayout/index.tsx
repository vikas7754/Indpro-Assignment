"use client";
import { getTasks } from "@/APIs/task";
import { getProfile } from "@/APIs/user";
import LoginPage from "@/app/login/page";
import useUser from "@/redux/hooks/useUser";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import Loader from "../Loader";
import useData from "@/redux/hooks/useData";
import { getCategories } from "@/APIs/category";

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const areAuthRoutes = ["/login", "/signup"].includes(pathname);

  const { isLoggedIn, login } = useUser();
  const [loading, setLoading] = useState(true);

  const { initializeData, initializeCategories } = useData();

  const fetchProfile = async () => {
    if (!isLoggedIn) {
      setLoading(true);
      try {
        const { data } = await getProfile();
        if (data?.name) login(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      initializeData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();
      initializeCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchTasks();
      fetchCategories();
    }
    if (!isLoggedIn && !loading) router.push("/login");
  }, [isLoggedIn, loading]);

  if (loading) return <Loader />;

  if (!isLoggedIn && !areAuthRoutes) {
    return <LoginPage />;
  }

  return <>{children}</>;
};

export default MainLayout;
