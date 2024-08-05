import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/Shipmntslogo.png'
import './App.css'
import FileExplorer from './components/FileExplorer';

function App() {

  return (
    <>
      <div className="d-flex">
        <section className="hero-page left_sidebar">
          <div>
            <div className="d-flex">
              <div>
                <img src={logo} alt="" style={{ width: '70px' }} />
              </div>
              <div className="ms-2">
                <h2 className="m-0 p-0">Shimnts</h2>
                <p className="p-0 m-0">File Explorer</p>
              </div>
            </div>
          </div>

          <div>
            <h4>Files</h4>
            <div className="dropdown">
              <button className="btn btn-md dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Master
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className="search">
            <p>Go to file</p>
          </div>
        </section>
        <section className="right_sidebar pt-5">
          <div className=" hero_right">
            <div>
              <p className="m-0 p-0">File Explorer</p>
              <h2 className="m-0 p-0">Shipmnts</h2>
            </div>
            <div>
              <div className="dropdown">
                <button className="btn btn-md dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Master
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right-table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="space">Name</th>
                  <th scope="col" className="space">Last Commit Message</th>
                  <th scope="col" className="space">Last Commit Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="space">
                  <td className="space">Component</td>
                  <td className="space">Lorem Ipsum is simply dummy text of </td>
                  <td className="space">24/03/2024</td>
                </tr>
                <tr className="space">
                  <td className="space">Component</td>
                  <td className="space">Lorem Ipsum is simply dummy text of </td>
                  <td className="space">24/03/2024</td>
                </tr>
                <tr className="space">
                  <td className="space">Component</td>
                  <td className="space">Lorem Ipsum is simply dummy text of </td>
                  <td className="space">24/03/2024</td>
                </tr>
                <tr className="space">
                  <td className="space">Component</td>
                  <td className="space">Lorem Ipsum is simply dummy text of </td>
                  <td className="space">24/03/2024</td>
                </tr>
                <tr className="space">
                  <td className="space">Component</td>
                  <td className="space">Lorem Ipsum is simply dummy text of </td>
                  <td className="space">24/03/2024</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
      </div>

      <FileExplorer />
    </>
  )
}

export default App
