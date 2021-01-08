# React Router V6 Project

#  live demo at =>     https://alibutt-music-app.surge.sh/
### This project includes routing from one component to another , also through simple / nested and using the HOOK useParam( ) .

# 1 installing react router V6
### `yarn add history react-router-dom@next`

* import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 * <BrowserRouter
  * <Routes  
 ## 
    ## nested /useparam=>  <Route path="/video/:id" element={</>} />
    ## simple=> <Route path="/" element={</>} />
  *   </Routes
 * </BrowserRouter

 ### Add Link of in video component 
* < Link  to={`/Videos/${slug}`} >component
 * < /Link 
 * To get the address of url use hook useParam in respected component  
