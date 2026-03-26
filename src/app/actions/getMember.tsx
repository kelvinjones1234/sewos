"use server";

import { PrismaClient } from "@prisma/client";

// Initialize Prisma (or import from your prisma lib if you have a singleton setup)
const prisma = new PrismaClient();

export async function getMemberById(membershipId: string) {
  try {
    if (!membershipId) {
      return { success: false, error: "Membership ID is required." };
    }

    // Clean up the input to ensure it perfectly matches the database format
    const cleanId = membershipId.trim().toUpperCase();

    // Query the database for the unique membership ID
    const member = await prisma.member.findUnique({
      where: {
        membershipId: cleanId,
      },
      // You can optionally restrict which fields are sent to the client for security
      select: {
        id: true,
        membershipId: true,
        fullName: true,
        ward: true,
        state: true,
        profilePicture: true,
        verified: true,
        createdAt: true,
        // We exclude sensitive data like residentialAddress and whatsappNumber
        // since they aren't needed to display the ID card
      },
    });

    if (!member) {
      return { 
        success: false, 
        error: "No member found with that ID. Please check and try again." 
      };
    }

    return { success: true, data: member };

  } catch (error) {
    console.error("Error fetching member by ID:", error);
    return { 
      success: false, 
      error: "A network error occurred. Please try again later." 
    };
  }
}