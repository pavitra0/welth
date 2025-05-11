import Hero from "../components/hero";
import {statsData,featuresData,howItWorksData,testimonialsData} from "../data/landing"
import {Card,CardContent}from "../components/ui/card";
import {Button} from "../components/ui/button";
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className="mt-40">
      <Hero />
     <section className="py-20 bg-blue-50">
     <div className="container mx-auto px-4">
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
     {statsData.map((data,i)=>{
       return <div key={i} className="text-center">
       <div className="text-4xl font-bold text-blue-600 mb-2 ">{data.value}</div>
         <div className="text-gray-600">{data.label}</div>
       </div>
     })}
     </div>
     </div>
     </section>

      <section className="py-20">
      <div className="container mx-auto px-4">
      <h3 className="pb-12 font-bold text-3xl text-center">Everything you need to manage your finances</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">{featuresData.map((feature,i)=>{
      return <Card key={i} className="p-6">
      <CardContent className="space-y-4 pt-4">
        {feature.icon}
        <h3 className="text-xl font-semibold" >{feature.title}</h3>
        <p className="text-gray-600" >{feature.description}</p>
      </CardContent>
      </Card>
        })}</div>
      </div>
      </section>

      <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
      <h3 className="pb-12 font-bold text-3xl text-center">How It Works</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 mb-4 gap-8">{howItWorksData.map((step,i)=>{
      return <div className="text-center" key={i}>
      <div className="flex justify-center items-center h-16 w-16 rounded-full mx-auto mb-6 bg-blue-100">{step.icon}</div>
      <h3 className="text-xl font-semibold" >{step.title}</h3>
      <p className="text-gray-600" >{step.description}</p>  
      </div>
        })}</div>
      </div>
    </section>  


            <section className="py-20">
      <div className="container mx-auto px-4">
      <h3 className="pb-12 font-bold text-3xl text-center">What Our Users Say</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">{testimonialsData.map((testimonial,i)=>{
      return <Card key={i} className="p-6 container mx-auto">
      <CardContent className="space-y-4 pt-4">
        <div className="flex items-center mb-6" >
        <Image className="rounded-full" src={testimonial.image} alt={testimonial.name} width={48} height={48} />
        
        <div className="ml-4"  >
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-gray-600" >{testimonial.role}</div>
        </div>

        </div>
        <p className="text-gray-600" >{testimonial.quote}</p>
        
      </CardContent>
      </Card>
        })}</div>
      </div>
      </section>


                  <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
      <h2 className="font-bold text-3xl text-center text-white mb-4">Ready to Take Control of Your Finances?</h2>
<p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-pulse"
            >
              Start Free Trial
            </Button>
          </Link>
      </div>
      </section>
      
    </div>
  );
}
