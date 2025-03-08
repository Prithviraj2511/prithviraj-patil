import timelineElements from "./TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tags from "./tags";

function Career() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <section id="career" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">My Career Timeline</h2>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.id}
                contentStyle={{
                  background: "#27272a",
                  boxShadow: isWorkIcon
                    ? "0 2px 3px 0 #06D6A0"
                    : "0 2px 3px 0 #f9c74f",
                  borderRadius: "0.5rem",
                }}
                contentArrowStyle={{
                  borderRight: isWorkIcon
                    ? "7px solid #06D6A0"
                    : "7px solid #f9c74f",
                }}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={
                  isWorkIcon ? (
                    <img src="./images/work.svg" alt="work" className="p-3" />
                  ) : (
                    <img
                      src="./images/school.svg"
                      alt="school"
                      className="p-3"
                    />
                  )
                }
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="vertical-timeline-element-title text-zinc-200 text-lg">
                      {element.title}{" "}
                    </h3>
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500">
                      {element.location}
                    </span>
                  </div>
                </div>

                <h5 className="vertical-timeline-element-subtitle text-zinc-300/80">
                  {element.position}
                </h5>

                <p
                  style={{ fontWeight: "400" }}
                  className="text-zinc-500"
                  id="description"
                >
                  {element.description}
                </p>
                <div className="mt-3">
                  <Tags tags={element.tags ? element.tags : []} />
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Career;
