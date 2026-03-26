"use server";

import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../lib/cloudinary";
import { revalidatePath } from "next/cache";
import { generateMembershipId } from "../lib/utils";

const prisma = new PrismaClient();

export async function createMember(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const residentialAddress = formData.get("residentialAddress") as string;
    const state = formData.get("state") as string;
    const ward = formData.get("ward") as string;
    const whatsappNumber = formData.get("whatsappNumber") as string;
    const file = formData.get("profilePicture") as File | null;

    if (
      !fullName ||
      !residentialAddress ||
      !state ||
      !ward ||
      !whatsappNumber
    ) {
      return { success: false, error: "Please fill in all required fields." };
    }

    let profilePictureUrl = null;
    if (file && file.size > 0) {
      const uploadResult = await uploadImage(file, "verified_members");
      profilePictureUrl = uploadResult.url;
    }

    // Generate the 8-character string
    const newId = generateMembershipId();

    const newMember = await prisma.member.create({
      data: {
        membershipId: newId,
        fullName,
        residentialAddress,
        state,
        ward,
        whatsappNumber,
        profilePicture: profilePictureUrl,
        verified: true,
      },
    });

    // Clear cache so the new member appears instantly
    revalidatePath("/admin/dashboard/members");

    return { success: true, data: newMember };
  } catch (error) {
    console.error("Error creating member:", error);
    return {
      success: false,
      error: "Failed to create member. Please try again.",
    };
  }
}

export async function updateMember(id: string, formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const residentialAddress = formData.get("residentialAddress") as string;
    const state = formData.get("state") as string;
    const ward = formData.get("ward") as string;
    const whatsappNumber = formData.get("whatsappNumber") as string;
    const file = formData.get("profilePicture") as File | null;
    const isVerified = formData.get("verified") === "true";

    if (
      !id ||
      !fullName ||
      !residentialAddress ||
      !state ||
      !ward ||
      !whatsappNumber
    ) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const updateData: any = {
      fullName,
      residentialAddress,
      state,
      ward,
      whatsappNumber,
      verified: isVerified,
    };

    if (file && file.size > 0) {
      const uploadResult = await uploadImage(file, "verified_members");
      updateData.profilePicture = uploadResult.url;
    }

    const updatedMember = await prisma.member.update({
      where: { id },
      data: updateData,
    });

    // Clear cache so the edited member updates instantly on the dashboard
    revalidatePath("/admin/dashboard/members");

    return { success: true, data: updatedMember };
  } catch (error) {
    console.error("Error updating member:", error);
    return {
      success: false,
      error: "Failed to update member. Please try again.",
    };
  }
}

// --- GET ALL MEMBERS ---
export async function getMembers() {
  try {
    const members = await prisma.member.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: members };
  } catch (error) {
    console.error("Error fetching members:", error);
    return { success: false, error: "Failed to fetch members" };
  }
}

export async function deleteMember(id: string) {
  try {
    await prisma.member.delete({
      where: { id },
    });

    // Clear the cache when a member is deleted
    revalidatePath("/admin/dashboard/members");

    return { success: true };
  } catch (error) {
    console.error("Error deleting member:", error);
    return { success: false, error: "Failed to delete member." };
  }
}
