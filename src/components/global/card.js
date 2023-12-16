"use client" ;
export default function Card({className, thumbnail, actions, children, title}) {
    return <div className={`card card-compact ${className}`}>
        {
            thumbnail && <figure><img src={thumbnail} alt={title} /></figure>
        }
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            {children}
            {actions && <div className="card-actions">
                {actions}
            </div>}
        </div>
    </div>
}