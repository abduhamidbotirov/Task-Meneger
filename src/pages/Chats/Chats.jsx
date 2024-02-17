import React from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
const Chats = () => {
  const { id } = useParams();
  console.log("id :", id);



//   const [chat, setChats] = useState([
//     {
//         role: "worker",
//         content: `Assalomu alekum.
//     Men vazifani bajarib bo'ldim
//     `
//     },
//     {
//         role: "manager",
//         content: `Valekum assalom assalomu alekum.
//          Vazifani bajarib bo'lgan bo'lsangiz yaxshi. Yangi vazifa yuklab beraman.
//         `
//     },
//     {
//         role: "worker",
//         content: `Assalomu alekum.
//         Ho'p bo'ladi. Kutib qolaman.
//         `
//     },
//     {
//         role: "worker",
//         content: `Assalomu alekum.
//     Men vazifani bajarib bo'ldim
//     `
//     },
//     {
//         role: "manager",
//         content: `Valekum assalom assalomu alekum.
//          Vazifani bajarib bo'lgan bo'lsangiz yaxshi. Yangi vazifa yuklab beraman.
//         `
//     },
//     {
//         role: "worker",
//         content: `Assalomu alekum.
//         Ho'p bo'ladi. Kutib qolaman.
//         `
//     },
// ])



  return (


    <>
      <div className="chatWrapper bg-dark">
        <div className="chatWraps">
          <h3 className="chatWraps-title">Guruh a'zolari</h3>
          <ul className="chatWraps-body">
            <li>Muhammadamin</li>
            <li>Abduhamid</li>
            <li>Nursulton</li>
            <li>Sardor</li>
            <li>Tesh</li>
            <li>Bolta</li>
            <li>Kartoshka</li>
            <li>Piyoz</li>
          </ul>
          <ul className="chatWraps-setting">
            <li>Guruh a'zolarini o'chirish</li>
            <li>Yangi hodim qo'shish</li>
            <li>Qorong'u rejim</li>
          </ul>
        </div>
        <div className="chatWrapsMain">
          <div className="chatWrapsMain-header">
            <h3>Project name</h3>
            <p>13 a'zo</p>
          </div>
          <div className="chatWrapsMain-body"></div>
          <div className="chatWrapsMain-footer ">
            <div className="wrapper">
              <div className="file-upload">
                <input type="file" />
                <i className="fa fa-arrow-up"></i>
              </div>
            </div>
            <div className="chatWrapsMain-footer-inputW">
              <input type="text" placeholder="Enter text" />
            </div>
            <div className="chatWrapsMain-footer-send">
              <i className="fas fa-paper-plane"></i>
            </div>
          </div>
        </div>
        <div className="chatWraps">
          <div>
            <h3>Vazifa</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              voluptatem ut aperiam culpa laborum cumque odio veniam quidem,
              expedita porro consectetur. Delectus explicabo distinctio unde
              suscipit itaque consequatur omnis quasi maiores eum necessitatibus
              voluptatum cumque in dignissimos, eveniet exercitationem ipsum
              facere odio quisquam quam rerum vero hic! Vel quis suscipit
              eveniet iste expedita quas aliquid quaerat distinctio! Ipsum vel
              et repudiandae minus ipsam error animi eos? Aliquid unde vero
              praesentium animi delectus. Quasi explicabo error voluptatum
              maxime eius! Officiis, qui assumenda. Quisquam doloremque quo
              rerum iste, hic fuga ex molestiae animi doloribus dolorem unde
              nobis. Labore iusto hic optio odit, veritatis nisi ea provident,
              nihil dolorum adipisci omnis est vero autem similique a excepturi
              ipsa praesentium, enim sequi exercitationem voluptas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
