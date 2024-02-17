import React from 'react';
import "./sidebar.css"
import { Collapse, initMDB } from 'mdb-ui-kit';
import img from "../../assets/minepictures.jpg"
initMDB({ Collapse });
const sidebar = () => {
    return (
        <div className='sidebar p-2'>
            <div className="profileData">
                <div className='profilData-img' >
                    <img src={img} alt="" />
                </div>
                <h4 className='text-center workerName'>Muhammadamin</h4>
                

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        data-mdb-collapse-init
        class="accordion-button"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Hodim Malumotlari
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
            <span className='reyting styleShit'>
                    <p>Reytin</p>
                    <p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </p>
                </span>
                <span className='Role styleShit'>
                    <p>Mansabi</p>
                    <p>Worker</p>
                </span>
                <span className='taskData styleShit'> 
                    <p>Vazifalar</p>
                    <p>5</p>
                </span>
                <span className='taskDataInfo styleShit'> 
                    <p>Rad etilgan Vazifalar</p>
                    <p>5</p>
                </span>
      </div>
    </div>
  </div>

 
                </div>
                
                <div className="sidebarSide mt-3">
                <span>
                    <p>Yangi vazifa qo'shish</p>
                    </span>
                    <span>
                    <p>Qorong'u rejim</p>
            </span>
            <span>
                    <p>Vazifaga hodim biriktirish</p>
            </span>
            <span>
                    <p>Qorong'u rejim</p>
                </span>
                <span>
                    <p>Qorong'u rejim</p>
                </span>
                </div>
             </div>
        </div>
    );
};

export default sidebar;