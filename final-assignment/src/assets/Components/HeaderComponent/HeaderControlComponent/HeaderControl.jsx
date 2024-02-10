import React from 'react'
import "./style.css"
const HeaderControl = () => {
  return (
    <>
        <div className='header-control-wrapper flex justify-between items-center gap-x-8'>
            <div className='header-control-nav flex justify-between items-center gap-x-2'>
                <a href='' className='header-control-item'>
                    <img className='control-item__icon object-cover' src='https://s3-alpha-sig.figma.com/img/428e/3a18/014835c48fc3848c37a8147a0b848e40?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VbRR88lJU07ABUsf0cUrTbRP0drjjlWlmbPrN2CR4Wn-nQVgsJ0M2oyX4iQiZg7O6d~s9ynWuz1JS4Cw4VbOhoXdh1YkbMHVq8yNlYe6qcpQ4wb-2Egpe1bMMq1dQJkG-25RCSr~Fgq3N2XSRydfvBq3P8T~O-XVNgJ8BCgFB6QVqbZNHywLXd6hpSXGuZXDzIsSFTmR~sc~WRcq3518C4IO6tdKei1~hpaWn1VYoKG9z0ETpJJStZ~oNRVLGNlR2CEuYnPaDrC-GTnBT1XvvN76hhotNLH6ONQKGu3XzA2MJYUMja5hWJbyB~pfSIoRWS6qz5AUjIQFXICIx3OMJA__'></img>
                    <div className='control-item__text'>Trang chủ</div>
                </a>

                <a href='' className='header-control-item'>
                    <img className='control-item__icon object-cover' src='https://s3-alpha-sig.figma.com/img/4b75/ae06/c1ed80deda31d49b91763474ad6f4e8b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7OjFDB2j9zqFO8HybzxP7ElemLofGSQMr-rh43L5mKYEqaQE97~G5X8SQ8RptxkionsPcZMpN5oJVjBJ~bc-X2yhjLrScaWwCdX4BlXalI3WH3MtmjH68wPJBAEUi1eIyqqyr3cAyP1qb1tNrB99mqKwfeDUbuOC7hTzHf6iluuQYAxZCz6MgWsNfERjPxs43efikV65CXzqb14dn0mxKaels76gEGty7Yw42DpV8N3KWw7xwr1j5GQzttvAoVTOhlzoQunP2BMdViyziCX8OfGgY6ui-U74FUdvhM8VZ6nB2Sm8Kdkf377YYRgZ1~CiAUV0vWRE7o72Uwsh2pJmg__'></img>
                    <div className='control-item__text'>Tài khoản</div>
                </a>
            </div>

            <div className='header-control-cart'>
                <a href='' className='control-cart-icon header-control-item'>
                    <img className='control-item-cart-icon object-cover' src='https://s3-alpha-sig.figma.com/img/a084/d2e6/defd412e1477724456bfb6c09607f2de?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MoH~it92VG5Bx4-VIu1UEIFpXb3kqdrGGYk7rdqk-RQP3Awz81PB48uLJ3DIBrkAlB~eFn9MR8ixYBkTdN8mjVtwYGl6v6F~HHVSbxe9mAZ-124x9VJhUmFvmnvgZLfi~FJhvIj6OoKlMEs3-JHMPnlnzIDgtyoGEuBZageuj~IwKO18lmVJNtPcuh9TiTzWdnFZuJMakwK5Jm--XzqjHjxOVq0H4Qtz1mvxfXAfbx~tKuqe36cAtkIwUJxaacwQUc-N5iU-escSbk66245~ENG~rVJrvCh1UhWJNgmNdD9uH-cH65bIoKfpsORyUb9FrgRm~24NHSUnl17wmJ9bcA__'></img>
                
                    <span className='control-item-cart-quantity'>0</span>
                </a>
            </div>
        </div>
    </>
  )
}

export default HeaderControl