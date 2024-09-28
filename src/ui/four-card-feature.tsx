import "./four-card-feature.css"
import calclator from "/public/images/icon-calculator.svg"
import karma from "/public/images/icon-karma.svg"
import supervisor from "/public/images/icon-supervisor.svg"
import teamBuilder from "/public/images/icon-team-builder.svg"


interface Item {
  title: string,
  description: string
  imageUrl: string
  borderColor?: string
}


function FourCardFeature() {
  const items: Item[] = [
    {
      title: "Supervisor", description: "Monitors activity to identify project roadblocks", imageUrl: supervisor,
      borderColor: "--color-cyan"
    },
    {
      title: "Team Builder", description: "Scans our talent network to create the optimal team for your project", imageUrl: teamBuilder,
      borderColor: "--color-red"
    },
    {
      title: "Karma", description: "Regularly evaluates our talent to ensure quality", imageUrl: karma,
      borderColor: "--color-orange"
    },
    {
      title: "Calculator", description: "Uses data from past projects to provide better delivery estimates", imageUrl: calclator,
      borderColor: "--color-blue"
    },
  ]
  return (
    <section className="flex flex-col items-center px-7 my-10 py-10">

      <div className="text-center mb-6">
        <p className="text-[--grayish-blue] text-xl">Reliable, efficient delivery</p>
        <h2 className="font-[600] text-[--very-dark-blue] text-2xl my-2">Powered by Technology</h2>

        <p className="header-description text-[--grayish-blue]">
          Our Artificial Intelligence powered tools use millions of project data points
          to ensure that your project is successful
        </p>
      </div>


      <div className="card-container grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-10  gap rounded-lg overflow-hidden my-15">
        {items.map((item, index) =>

          <article key={index}
            className={"".concat(
              ...[
                "technology-card shadow-lg p-6 flex flex-col  rounded-lg overflow-hidden border-t-[4px] ",
              ]
            )}
            style={{ borderTop: `4px solid ${item.borderColor ? `var(${item.borderColor})` : `var(--very-dark-blue)`}` }}
          >

            <h3 className="font-[600]">{item.title}</h3>
            <p className=" text-[--grayish-blue]">{item.description}</p>
            <picture className="flex flex-row justify-end mt-4">
              <img src={item.imageUrl} alt={item.title} />
            </picture>
          </article>)}
      </div>











    </section >);
}

export default FourCardFeature;