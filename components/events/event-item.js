import classes from "./event-item.module.css";
import Button from "../button/button.js";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { image, title, id, key, date, time, location, description } = props;

  const readableDate = new Date(date).toLocaleDateString("us-en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedAddress = location;
  // const formattedAddress = location.replace("?", "?\n");

  const urlAddress = <a href={formattedAddress} target="_blank">{formattedAddress}</a>

  const exploreEvent = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1 className={classes.cardheader}>{title}</h1>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.date}>
            <DateIcon />
            <timehour>{time}</timehour>
          </div>
          <div className={classes.description}>
            <eventdescription>{description}</eventdescription>
          </div>
          <div className={classes.address}>
            {/* <AddressIcon /> */}
            <address className={classes.urlLink}>{urlAddress}</address>
          </div>
        </div>
        
        {/* <div className={classes.actions}>
          <Button link={exploreEvent}>
            <span>Explore Link</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div> */}
      </div>
    </li>
  );
}

export default EventItem;
