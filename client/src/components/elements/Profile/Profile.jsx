import React from "react"
import { useSelector,useDispatch} from "react-redux";
import { FormControl, Input, Button} from "@material-ui/core";

import { fetchPhoto } from '../../../redux'


import Header from '../../ui/Header/Header'
import Footer from '../../ui/Footer/Footer'

import FilesServices from '../../../services/files.services'



import ProfileStyle from './ProfileStyle'
import ButtonGB from "../../ui/ButtonGB/Button";

const Profile = () => {

   const styleProfile = ProfileStyle()
   const userz = useSelector(state => state.user)
   const dispatch = useDispatch();

   const handleFileUpload = e => {

      const uploadData = new FormData()
      uploadData.append("imageUrl", e.target.files[0])
  
      FilesServices.handleUpload(uploadData)
        .then(response => dispatch(fetchPhoto(response.secure_url)))
        .catch(error => console.log(error))
  
   };


   return(
       
        <>
        <Header title="Perfil" route='home'/>
            <div className={styleProfile.mainWrapper}>
               <div className={styleProfile.dogInfo}>

                  <h2>{userz.dog.name}</h2>

                  <figure>
                     {userz.dog.photo?
                        <img className={styleProfile.imgWrapper} src={userz.dog.photo} alt='your dog'/>
                     :
                        <div className=''>
                           <FormControl>
                              <Input
                              accept="image/*"
                              style={{ display: 'none' }}
                              type="file"
                              id="photo"
                              name="imageUrl"
                              multiple
                              value={userz.dog.photo}
                              onChange={handleFileUpload}
                              />
                              <label htmlFor="photo">
                                 <Button variant="raised" component="span">
                                    <img src='../../../../../images/new.png' alt="dog index" />
                                 </Button>
                              </label>
                           </FormControl>
                        </div>}
                  </figure>

                  <div>
                     <p className='text'>{userz.dog.genre} / {userz.dog.breed} / {userz.dog.age}</p>
                  </div>

                  <div className={styleProfile.decoration}></div> 
               </div>


               <div className={styleProfile.userInfo + 'text'}>
                  
                  <p>Nombre de usuario: {userz.name}</p>
                  <p className='mt2'>E-mail: {userz.username}</p>
                  
                  <div className={styleProfile.decoration}></div>
               </div>
               
               <div onClick={()=>alert("Work in progress")}>

                  <ButtonGB text="Editar"/>
               </div>
               
               
            </div>
        <Footer/>
        </>
   )
}

export default Profile