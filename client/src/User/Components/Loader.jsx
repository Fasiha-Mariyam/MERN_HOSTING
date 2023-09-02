import React from 'react'
// import '../loader.css'

export default function Loader() {
    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ width: '100%', height: '90vh' }}>
            <div class="loader">
                <div data-glitch="Loading..." class="glitch">Loading...</div>
            </div>
        </div>
    )
}
