"use server";

export const getList = async() => {
    // Syntethic wait so we can see the Suspense
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return "success";
}