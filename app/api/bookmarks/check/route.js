import connectDB from "@/config/database";
import Property from "@/models/Property";

import User from "@/models/User";

import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";



// POST /api/bookmarks
export const POST = async (req) => {
  try {
    await connectDB();

    const { propertyId } = await req.json();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in database
    const user = await User.findOne({ _id: userId });

    // check if property is bookmarked

    let isBookmarked = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 401 });
  }
};
