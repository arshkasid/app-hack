import React ,{useState}from 'react'

const Reactdata = () => {


const [user, setUser] = useState({
    name: "",
    eventDate: "",
    entryDate: "",
    organizer: "",
    attendees: "",
    report: "",
    entryBy: ""

})
let name,value;
const getUserData = (event) => {
name=event.target.name;
value=event.target.value;

setUser({...user,[name]:value});

}

const postData = async (e) => {
e.preventDefault();

const {name,eventDate,entryDate,organizer,attendees,report,entryBy} = user;
if(name==="" || eventDate==="" || entryDate==="" || organizer==="" || attendees==="" || report==="" || entryBy===""){
    alert("Please fill all the fields");
}else{


const res = await fetch("https://app-hack-541eb-default-rtdb.firebaseio.com/app-hack.json",
{
    method:"POST",
headers:{ 
    "Content-Type":"application/json",
    },
    body:JSON.stringify({
        name,
            eventDate,
            entryDate,
            organizer,
            attendees,
            report,
            entryBy
            })
        }
);
if(res){
    setUser({
        name: "",
        eventDate: "",
        entryDate: "",
        organizer: "",
        attendees: "",
        report: "",
        entryBy: ""
    });
    alert("Data Stored");
}
}
    };



  return (
    <>

<div class="title-container">
            <h1><em>Add Data for the Event</em></h1>
        </div>


<div className="form-block">



<form method='POST'>
  <div className="form-group">
    <label htmlFor="name">Name of Activity</label>
    <input type="text" className="form-control" id="name" name="name" placeholder="Enter the name of the activity" value={user.name} onChange={getUserData} />
  </div>
  <br />
  <div className="form-group">
    <label htmlFor="eventDate">Date of Event</label>
    <input type="date" className="form-control" id="eventDate" name="eventDate" value={user.eventDate} onChange={getUserData} />
  </div>
  <br />
  <div className="form-group">
    <label htmlFor="entryDate">Date of Entry</label>
    <input type="date" className="form-control" id="entryDate" name="entryDate" value={user.entryDate} onChange={getUserData} />
  </div>
  <br />
  <div className="form-group">
    <label htmlFor="organizer">Organizing Person</label>
    <input type="text" className="form-control" id="organizer" name="organizer" placeholder="Enter the name of the organizing person" value={user.organizer} onChange={getUserData} />
  </div>
  <br />
  <div className="form-group">
    <label htmlFor="attendees">Number of Attendees</label>
    <input type="number" className="form-control" id="attendees" name="attendees" placeholder="Enter the number of attendees" value={user.attendees} onChange={getUserData} />
  </div>
  <br />
  <div className="form-group">
    <label htmlFor="report">Link of Report</label>
    <input type="url" className="form-control" id="report" name="report" placeholder="Enter the link of the report" value={user.report} onChange={getUserData} />
  </div>
  <br />
  <div className="form-group">
    <label htmlFor="entryBy">Entry Done By (Email)</label>
    <input type="email" className="form-control" id="entryBy" name="entryBy" placeholder="Enter the email of the person who did the entry" value={user.entryBy} onChange={getUserData} />
  </div>
  
  <button type="submit" className="btn btn-primary "   onClick={ postData}>Submit</button>
  <a href="https://d.docs.live.net/8046a9efde9e838b/Documents/excelHACKT.xlsx" target="_blank" className="btn btn-primary" >Export</a>
</form>



</div>

      





    </>
  )
}

export default Reactdata
