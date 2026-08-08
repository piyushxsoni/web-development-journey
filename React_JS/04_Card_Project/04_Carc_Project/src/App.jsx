// import React from 'react'
// import {Bookmark} from 'lucide-react'
import Card from './components/Card'


const App = () => {

  const jobOpenings = [ 
  {
    brandLogo: "https://banner2.cleanpng.com/20180823/af/kisspng-google-logo-portable-network-graphics-image-google-g-1713950449474.webp",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/592/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/apple-company-logo-vector-printable-mobile-laptop-stickers-cups-mugs-182823911.jpg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1716967318503-05b7064afa41?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OpenAI_logo_2025_%28symbol%29.svg/960px-OpenAI_logo_2025_%28symbol%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    companyName: "OpenAI",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA",
  },
  {
    brandLogo: "https://www.logoai.com/uploads/articles/2024/03/05/17096201743375736.png  ",
    companyName: "Tesla",
    datePosted: "5 weeks ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Austin, USA",
  },
  ];
  // console.log(jobOpenings);
  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        console.log(idx);
        return <div key={idx}>
          <Card Company={elem.companyName} post={elem.post} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} datePosted={elem.datePosted} location={elem.location}/>

        </div>
      })}
    </div>
  )

}

export default App