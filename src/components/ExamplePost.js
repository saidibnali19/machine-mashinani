import Image from "next/image";
import Post from "./Post";

export default function ExamplePost() {
    return (
        <>
            <article className="max-w-5xl mx-auto px-4 space-y-4 py-32 sm:py-36">
                <h1 className="text-5xl sm:text-7xl font-serif text-sky-950 capitalize">AI-Powered Agriculture: Transforming Kenya&apos;s Farming Landscape</h1>
                <p>By Wanjiku Mwangi | July 6, 2025</p>
                <div className="flex gap-4 w-min justify-center mx-auto p-4">
                    <svg className="size-8 bg-sky-950 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <g fill="none" stroke="#f9fafb">
                            <path d="M11.5 15.5h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4z" />
                            <circle cx="8" cy="8" r="3.5" />
                            <circle cx="12.5" cy="3.5" r=".5" />
                        </g>
                    </svg>
                    <svg className="size-8 bg-sky-950 p-1" xmlns="http://www.w3.org/2000/svg" fill="#f9fafb" viewBox="0 0 24 24">
                        <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6z" />
                        <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6z" />
                        <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6zm20.9 1h-4.9c-.3 0-.5-.2-.5-.5v-5.8c0-1.2-.3-2.6-1.9-2.6-1.1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.3c0 .3-.2.5-.5.5H8.5c-.1 0-.3-.1-.4-.1S8 22.1 8 22V8.4c0-.1 0-.3.1-.4.1 0 .2-.1.4-.1h4.8c.3 0 .5.2.5.5V9c.8-.7 2.1-1.3 3.8-1.3 3.7 0 5.9 2.6 5.9 6.7V22c0 .3-.2.5-.5.5zm-4.4-1h3.9v-7.1c0-3.5-1.8-5.7-4.9-5.7-2.3 0-3.6 1.2-3.8 1.9-.1.2-.3.4-.6.3-.2 0-.4-.2-.4-.5V8.9H9v12.6h3.8v-5.8c0-.4 0-.8.1-1.2.5-1.3 1.5-2 2.8-2 1.8 0 2.9 1.3 2.9 3.6v5.4z" />
                        <path d="M23 22.5h-4.9c-.3 0-.5-.2-.5-.5v-5.8c0-1.2-.3-2.6-1.9-2.6-1.1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.3c0 .3-.2.5-.5.5H8.5c-.1 0-.3-.1-.4-.1S8 22.1 8 22V8.4c0-.1 0-.3.1-.4.1 0 .2-.1.4-.1h4.8c.3 0 .5.2.5.5V9c.8-.7 2.1-1.3 3.8-1.3 3.7 0 5.9 2.6 5.9 6.7V22c0 .3-.2.5-.5.5zm-4.4-1h3.9v-7.1c0-3.5-1.8-5.7-4.9-5.7-2.3 0-3.6 1.2-3.8 1.9-.1.2-.3.4-.6.3-.2 0-.4-.2-.4-.5V8.9H9v12.6h3.8v-5.8c0-.4 0-.8.1-1.2.5-1.3 1.5-2 2.8-2 1.8 0 2.9 1.3 2.9 3.6v5.4zM3.6 7.2C1.8 7.2.5 6 .5 4.4c0-1.7 1.3-2.9 3.1-2.9s3 1.2 3.1 2.8c0 1.7-1.3 2.9-3.1 2.9zm0-4.7c-1.3 0-2.1.7-2.1 1.9 0 1.1.8 1.9 2.1 1.9s2.1-.7 2.1-1.9-.8-1.9-2.1-1.9z" />
                    </svg>
                    <svg className="size-8 bg-sky-950 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <g>
                            <circle cx="8" cy="8" r="7.5" fill="none" stroke="#f9fafb" />
                            <path fill="none" stroke="#f9fafb" d="M3.76 10.28c2.1-.49 5.44-.47 7.5.98M3.44 8c3.68-.75 6.5-.34 8.8 1.3M3.11 5.72c3.06-1.08 7.38-.88 10.11.98" />
                        </g>
                    </svg>
                </div>
                <Image src={"/images/featured.webp"} width={1024} height={1024} alt="" />
                <p className="max-w-prose">Artificial Intelligence (AI) is reshaping industries worldwide, and Kenya&apos;s agricultural sector is no exception. As a nation where agriculture contributes over 30% to GDP and employs millions, Kenya stands to gain significantly from AI-driven innovations. From smallholder farmers in Nyeri to large-scale farms in the Rift Valley, AI is enabling smarter farming practices, boosting yields, and enhancing food security.</p>
                <p className="max-w-prose">One of the most impactful applications of AI in Kenyan agriculture is precision farming. AI-powered tools analyze satellite imagery, weather data, and soil conditions to provide farmers with actionable insights. For instance, platforms like PlantVillage Nuru, a Kenyan-developed AI app, help farmers diagnose crop diseases in real-time using smartphone cameras. This technology is a game-changer for smallholder farmers who lack access to agricultural extension services.</p>
                <blockquote className="max-w-prose">“AI is like having an agricultural expert in your pocket. It tells me when my maize is at risk and what to do about it,” says Jane Wambui, a farmer in Kiambu County.</blockquote>
                <p className="max-w-prose">AI also facilitates predictive analytics for weather and market trends. In Kenya, where erratic weather patterns due to climate change threaten livelihoods, AI models predict rainfall and drought patterns with remarkable accuracy. Companies like Apollo Agriculture use AI to provide farmers with tailored advice on planting schedules and crop varieties, reducing risks and improving productivity.</p>
                <p className="max-w-prose">Data analysis plays a critical role in these AI systems. By processing vast datasets from IoT devices, drones, and mobile apps, AI platforms generate insights that were previously inaccessible to most Kenyan farmers. For example, soil sensors collect data on moisture and nutrient levels, which AI algorithms analyze to recommend precise fertilizer application, minimizing waste and environmental impact.</p>
                <p className="max-w-prose">However, the adoption of AI in Kenyan agriculture faces challenges. Limited internet connectivity in rural areas, high costs of smart devices, and low digital literacy among farmers are significant barriers. Initiatives like Digital Green and iCow are addressing these issues by offering SMS-based AI services, enabling farmers without smartphones to access AI-driven advice.</p>
                <p className="max-w-prose">The government is also stepping in. The Kenya Agricultural Observatory Platform (KAOP), supported by the Ministry of Agriculture, uses AI to monitor crop health and predict yields across the country. This data-driven approach helps policymakers allocate resources effectively, especially during droughts or pest outbreaks.</p>
                <ul className="max-w-prose list-decimal px-4 space-y-4" role="list">
                    <p className="max-w-prose">Here are some key benefits of AI in Kenyan agriculture:</p>
                    <li>Increased Yields: AI optimizes planting and harvesting schedules, boosting productivity.</li>
                    <li>Cost Efficiency: Precision farming reduces input costs like fertilizers and pesticides.</li>
                    <li>Climate Resilience: Predictive models help farmers adapt to changing weather patterns.</li>
                    <li>Accessibility: Mobile-based AI tools reach even remote farmers.</li>
                </ul>
                <p className="max-w-prose">Despite these advancements, ethical considerations remain. Data privacy is a concern, as farmers&apos; data is often collected by private companies. There&apos;s also the risk of over-reliance on AI, which could sideline traditional knowledge. Balancing technology with indigenous practices is crucial for sustainable progress.</p>
                <p className="max-w-prose">To scale AI adoption, public-private partnerships are essential. Organizations like AGRA and Tech Hub Nairobi are training farmers on AI tools and subsidizing access to smart devices. These efforts are empowering farmers, particularly women and youth, to embrace technology.</p>
                <p className="max-w-prose">The future of AI in Kenyan agriculture is bright. With continued investment in infrastructure and education, AI can transform Kenya into a regional leader in smart farming. As more farmers adopt these tools, the dream of a food-secure Kenya becomes increasingly attainable.</p>
                <p className="max-w-prose">For more information on AI in agriculture, visit PlantVillage or Apollo Agriculture.</p>
            </article>
            <article className="bg-sky-100 max-w-5xl px-4 mx-auto py-32 sm:py-36 space-y-4">
                <h2>Related Posts</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                    {
                        [1, 2, 3].map(num => (
                            <Post key={num} />
                        ))
                    }
                </div>
            </article>
        </>
    )
}
