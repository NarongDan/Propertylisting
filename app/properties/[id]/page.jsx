"use client";

import BookmarkButton from "@/components/BookmarkButton";
import PropertyContactForm from "@/components/PropertyContactForm";
import PropertyDetail from "@/components/PropertyDetail";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import ShareButton from "@/components/ShareButton";
import Spinner from "@/components/Spinner";
import { fetchProperty } from "@/utils/request";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log("Error fetching property", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }
  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-2" />
                Back to Properties
              </Link>
            </div>
          </section>

          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetail property={property} />

                <aside className="space-y-4">
                  <BookmarkButton property={property} />

                  <ShareButton property={property} />

                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
};

export default PropertyPage;

/* import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const { id } = useParams();
  const pathName = usePathname();

  return (
    <div>
      <div className="bg-blue-400 p-2" onClick={() => router.push("/")}>
        Go Home {id} {name} {pathName}
      </div>
    </div>
  );
};

export default PropertyPage; */
