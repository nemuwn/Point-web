import { useCallback } from "react";
import { useForm } from "react-hook-form";
import sdk from "@/sdk";
import { toast } from "react-toastify";
const useApply = () => {
  const { register, handleSubmit } = useForm();

  const submit = useCallback((values: any) => {
    sdk
      .addOrder({
        order: Object.assign(values, { quantity: Number(values.quantity) }),
      })
      .then(() => toast.success("Order success"))
      .catch((err) => toast.error(err));
  }, []);

  return { submit, register, handleSubmit };
};
export default useApply;
