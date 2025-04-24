"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@heroui/button";
import AuthSocialButton from "./AuthSocialButton";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import InputForm from "../InputForm";

type Variant = "login" | "register";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("login");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    setVariant(variant === "login" ? "register" : "login");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "register") {
      // Handle register
    }
    if (variant === "login") {
      // Handle login
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // Social login logic
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {variant === "register" && (
            <InputForm register={register} required id="name" label="Name" type="text" />
          )}

          <InputForm register={register} required id="email" label="Email" type="email" />
          <InputForm register={register} required id="password" label="Password" type="password" />

          <div>
            <Button color="primary" type="submit" fullWidth disabled={isLoading} className="w-full">
              {isLoading && <span className="loader"></span>}
              {variant === "login" ? "Login" : "Register"}
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="h-px w-16 bg-gray-300" />
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="h-px w-16 bg-gray-300" />
          </div>

          <div className="flex gap-4">
  <div className="w-1/2">
    <AuthSocialButton
      provider="google"
      icon={FaGoogle}
      onClick={() => socialAction("google")}
    />
  </div>
  <div className="w-1/2">
    <AuthSocialButton
      provider="github"
      icon={FaGithub}
      onClick={() => socialAction("github")}
    />
  </div>
</div>
<div>
            <p className="text-sm text-gray-500 text-center mt-4">
              {variant === "login" ? "New to us?" : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="cursor-pointer text-blue-500 hover:underline ml-1"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
