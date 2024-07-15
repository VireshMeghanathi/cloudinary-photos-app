import { CloudinaryImage } from "./cloudinery-image";
import Uploadbutton from "./uploadbutton";
import cloudinary from "cloudinary";

export default async function GalleryPage() {

    type Searchresult ={
        public_id: string
    }

    const results = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .max_results(10)
        .execute() as {resources: Searchresult[]};
    // console.log(results);

    return <section>
        <div className="flex flex-col gap-8">
            <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Gallery</h1>
            <Uploadbutton />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {results.resources.map((result)=>(
                    <CloudinaryImage
                        key={result.public_id}
                        src={result.public_id}
                        width="400"
                        height="300"
                        alt="smethin image"
                    />
                ))}
            </div>            
        </div>
    </section>
}