import React from "react"
import calclator from "/public/images/icon-calculator.svg"
import karma from "/public/images/icon-karma.svg"
import supervisor from "/public/images/icon-supervisor.svg"
import teamBuilder from "/public/images/icon-team-builder.svg"
import "./four-card-feature.css"


interface Item {
  title: string,
  description: string
  imageUrl: string
  borderColor?: string
}


function FourCardFeature() {
  const items: Item[] = [
    { title: "Supervisor", description: "Monitors activity to identify project roadblocks", imageUrl: supervisor, borderColor: "--cyan" },
    { title: "Team Builder", description: "Scans our talent network to create the optimal team for your project", imageUrl: teamBuilder, borderColor: "--c-red" },
    { title: "Karma", description: "Regularly evaluates our talent to ensure quality", imageUrl: karma, borderColor: "--orange" },
    { title: "Calculator", description: "Uses data from past projects to provide better delivery estimates", imageUrl: calclator, borderColor: "--blue" },
  ]
  return (<section className="flex flex-col items-center">

    <div className="text-center">
      <p className="text-[--grayish-blue]">Reliable, efficient delivery</p>
      <h2 className="font-[600]">Powered by Technology</h2>

      <p className="text-[--grayish-blue]">
        Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful
      </p>
    </div>


    <div className="grid grid-cols-1 gap-20 w-[300px] rounded-lg overflow-hidden">
      {items.map((item, index) =>
        <article key={index}
          className={[
            "technology-card shadow-lg p-6 flex flex-col border-t-[4px]",
            `border-[${item.borderColor ?? "--red"}]`
          ].join(" ")}
        >
          <h3 className="font-[600]">{item.title}</h3>
          <p className="text-[--grayish-blue]">{item.description}</p>
          <picture className="flex flex-row justify-end">
            <img src={item.imageUrl} alt={item.title} />
          </picture>
        </article>)}
    </div>











  </section>);
}

export default FourCardFeature;