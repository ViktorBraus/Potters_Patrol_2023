import * as React from 'react';
import '../../App.css';
import { TestSection }from './TestSection'
import Spinner from '../Home/Spinner'
import { useAuth0 } from "@auth0/auth0-react";
import { RouteComponentProps } from 'react-router';
import { UserContent } from '../test/FacultyTest'
var s;
const Photo = () =>
{
    const { isLoading, user } = useAuth0();
    s = user?.email;
    return (
        <><img className='imgpre' src={isLoading ? "" : user?.picture}></img></>
  )
}
const AccauntInfo = () =>
    {
      const {isLoading, isAuthenticated, user} = useAuth0();
      return(
      <div className='account'>
        <div className='wrapper1'>
          <div className='form-wrapper1'>
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <label className="userinfo">{isAuthenticated ? user?.email : ""}</label>
            </div>
            <div className="fullName">
              <label htmlFor="name">Username</label>
              <label className="userinfo">{isAuthenticated ? user?.nickname : ""}</label>
            </div>
          </div>
        </div>
    </div>
      )
    }
const Accaunt = () =>
    {
      const {isLoading, isAuthenticated, user} = useAuth0();
      return(
      <div className='account'>
      <form>
        <div className='wrapper1'>
          <div className='form-wrapper1'>
            <div className="email">
              <label htmlFor="email">E-mail</label>
                              <input className="email" required name="email" type="email"  placeholder={isAuthenticated ? user?.email : ""}/>
            </div>
            <div className="fullName">
              <label htmlFor="name">Username</label>
                              <input className="email" required name="name" type="name" placeholder={isAuthenticated ? user?.nickname : ""}/>
            </div>
            <div className="change">
              <button className='buta' disabled type="submit" >Change</button>
            </div>
          </div>
        </div>
      </form>
    </div>
      )
    }
interface filedata
{
  loading:boolean;
  file: string;
    imagePreviewUrl: string | ArrayBuffer | null;
    userList: UserContent[];
}

export class Profile extends React.Component<RouteComponentProps<{}>, filedata> {
  constructor(props) {
    super(props);
    this.state = {
          loading: false, file: '', imagePreviewUrl: "", userList: []
      };

      fetch('api/UserContent/Index')
          .then(response => response.json() as Promise<UserContent[]>)
          .then(data => {
              this.setState({ userList: data, loading: false });
          });
    }
  
  _handleSubmit(e) {
    e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        this.setState({
        file: file,
        imagePreviewUrl: reader?.result
      });
    }

    reader.readAsDataURL(file)
  }

  render = () => {
    let { imagePreviewUrl } = this.state;
    let $imagePreview;
      if (imagePreviewUrl) {
          $imagePreview = (<img className='imgpre' src={imagePreviewUrl.toString()}></img>);
    }
    else {
          $imagePreview = (<Photo />);
    }

      const Content = (user: UserContent[]) => {
      if (this.state.loading) {
        return <div className='spinner'><Spinner size='10x' spinning='spinning' /><br /></div>
      }
      return (
        <div className='Profile'>
          <br/>
          <div className='profileinformation'>
            <div className='profilecontent'>
              <div className="EditPhoto">
                          {$imagePreview}
              </div>
                <br/>
                 <input className='butaa' type="file"
                  onChange={(e) => this._handleImageChange(e)} />
            </div>
            <div>
            <AccauntInfo/>
            </div>
            <div>
            <Accaunt/>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='profileinformation'>
                  <div className='profilecontent'>
                     {user.map(u => 
                         <div className={u.faculty == "Ґрифіндор" ? "Gryf" :
                          u.faculty == "Слізерін" ? "Sliz" :
                              u.faculty == "Хафелпаф" ? "Huff" :
                                     u.faculty == "Рейвенкло" ? "Rav" :"NameOfFaculty"}>
                         </div>)}
                      <div className='labell'>
                          {user.map(u => u.faculty ? u.faculty : "Name Of Faculty")}
                      </div>
                  </div>
              <div className='profilecontent'>
                      {user.map(u =>
                          <div className={u.faculty == "Ґрифіндор" ? "Patr" :
                              u.faculty == "Слізерін" ? "Patr" :
                                  u.faculty == "Хафелпаф" ? "Patr" :
                                      u.faculty == "Рейвенкло" ? "Patr" : "Patronus"}>
                          </div>)}
                  <br />
                      <div className='labell'>
                          {user.map(u => u.patronus ? u.patronus : "Patronus")}
                </div>
              </div>
              <div className='profilecontent'>
                      {user.map(u =>
                          <div className={u.faculty == "Ґрифіндор" ? "W" :
                              u.faculty == "Слізерін" ? "W" :
                                  u.faculty == "Хафелпаф" ? "W" :
                                      u.faculty == "Рейвенкло" ? "W" : "Wand"}>
                          </div>)}
                 <br />
                <div className='labell'>
                          {user.map(u => u.wand ? u.wand : "Wand")}
                </div>
              </div>
              </div>
              </div>
      )
    }
    return (
      <div>
            <main>
                {Content(this.state.userList)}
          <label className='Passed'>Passed Tests</label>
          <TestSection />
        </main>
      </div>
    )
  }
}