import './exhibit.component.css'

function Exhibit({title, children}){
    return(
        <div  className='exhibit'>
            <h3 className='title'>{title}</h3>
            <div className='content'>
                {children}
            </div>
        </div>
    );
}

export default Exhibit;