import PropertyEditForm from "@/components/PropertyEditForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";

const PropertyEditPage = async ({ params }) => {
    await connectDB();

    const propertyDoc = await Property.findById(params.id).lean();
    const property = convertToSerializableObject(propertyDoc);

    if (!property) {
        return (
            <h1 className="text-2xl text-center font-bold mt-10">Property Not Found</h1>
        )
    }

  return (
      <section className="bg-blue-50">
          <div className="container mx-auto max-w-2xl py-24">
              <div className="bg-white px-6 py-8 nb-4 shadow-md rounded-md border mb-4 md:m-0">
                  <PropertyEditForm property={property} />
              </div>
          </div>
    </section>
  )
}

export default PropertyEditPage