"use server";

import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../lib/cloudinary";
import { generateMembershipId } from "../lib/utils";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function submitMemberApplication(formData: FormData) {
  try {
    // 1. Extract data from FormData
    const fullName = formData.get("fullName") as string;
    const residentialAddress = formData.get("residentialAddress") as string;
    const state = formData.get("state") as string;
    const ward = formData.get("ward") as string;
    const whatsappNumber = formData.get("whatsappNumber") as string;
    const file = formData.get("profilePicture") as File | null;

    // 2. Basic Validation
    if (!fullName || !residentialAddress || !state || !ward || !whatsappNumber) {
      return { success: false, error: "Please fill in all required fields." };
    }

    // 3. Generate the unique 8-character Membership ID
    const membershipId = generateMembershipId();

    // 4. Handle Image Upload to Cloudinary
    let profilePictureUrl = null;
    if (file && file.size > 0) {
      const uploadResult = await uploadImage(file, "member_applications");
      profilePictureUrl = uploadResult.url;
    }

    // 5. Save to Database with the new ID
    const newApplication = await prisma.member.create({
      data: {
        membershipId, // <-- 6. Insert the generated ID here
        fullName,
        residentialAddress,
        state,
        ward,
        whatsappNumber,
        profilePicture: profilePictureUrl,
      },
    });

    // 7. Tell Next.js to refresh the Admin Dashboard so this new member appears instantly
    revalidatePath("/admin/dashboard/members");

    return { success: true, data: newApplication };
  } catch (error) {
    console.error("Error submitting application:", error);
    return { success: false, error: "Failed to submit application. Please try again." };
  }
}