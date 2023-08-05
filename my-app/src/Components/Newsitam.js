
const Newsitam = (props) =>{

    let {title, description, imageurl, newsurl} = props;
    return (
      <div>
        <div className="card mb-4" style={{width: "18rem" }}>
          <img src={!imageurl?"https://akm-img-a-in.tosshub.com/sites/indiatoday/resources/img/default-690x413.png":imageurl} className="card-img-top" alt="..."/>
          <div className="card-body" style={props.style}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
export default Newsitam