import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar, Feed, PinsDetail, CreatePin, Search } from '../components';

const Pins = ({ user }) => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar user={user} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className='h-full'>
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/category/:categoryId' element={<Feed />} />
            <Route path='/pin-detail/:pinId' element={<PinsDetail user={user} />} />
            <Route path='/create-pin' element={<CreatePin user={user} />} />
            <Route path='/Search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          </Routes>

        </div>
      </div>

    </div>
  )
}

export default Pins