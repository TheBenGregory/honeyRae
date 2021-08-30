import React, { useEffect, useState } from "react"

export const Customers = () => {
    const [customers, assignCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    assignCustomers(customerArray)
                },
            
                )
        },
        []
    )

return (
    <>
    <article className="customers">
                <h2>Customer List</h2>
                {
                    customers.map(
                        (customerObject) => {
                            return <div key={ `customer--${customerObject.id}` }> { customerObject.name } </div>
                }
                )
            }
            </article>
            </>
)
}