import React, { useState } from 'react';

const SideForm = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
    })

    let name,value;
    const getUserData = (event) => { 
        name= event.target.name;
        value= event.target.value;

        setUser({ ...user, [name]: value});

    }; 

        const postData = async(e) => {
            e.preventDefault();

            const { name, email, mobile } = user;

            if ( name && email && mobile ) {

                const res = await fetch(
                    "https://a21-khandala-contact-default-rtdb.firebaseio.com/a21-khandalacontact.json",
                    {
                    method : "POST",
                    headers : {
                        "Content-Type": "application/json",
                    },
                    body : JSON.stringify({
                        name,
                        email,
                        mobile,
                    }),
                }
                );
    
                if (res) {
                    setUser({
                        name: "",
                        email: "",
                        mobile: "",
                    });
    
                    alert ("Data Submitted !");
                }

            } else {
                alert ("Fill All Fields");
            }
        };

    return (
        <>

            <div className="flex items-center justify-center lg:py-28 py-8">
                <div className="max-w-md w-full space-y-12 px-5">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-medium text-gray-900">
                            Speak with our Investment Specialist!
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Please share your details. We assure to get back to you on priority.
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="full-name" className="sr-only">Full Name</label>
                                <input id="full-name" name="name" value={user.name} type="text" onChange={getUserData} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full name" />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" value={user.email} type="email" onChange={getUserData} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="sr-only">Mobile No.</label>
                                <input id="mobile" name="mobile" value={user.mobile} type="mobile" onChange={getUserData} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mobile No." maxLength={10} minLength={10} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" required/>
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    I agree to 
                                    <a href="https://analah21.com/privacy-policy">Terms & conditions</a>
                                </label>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={postData}>
                                ENQUIRE NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SideForm;