import React from 'react'
import './style.css'
const HeaderLogo = (props) => {
  return (
    <div className={props.className}>
      <a href="">
        <img 
          className='object-contain header-logo'
          src = 'https://s3-alpha-sig.figma.com/img/0fc4/c1bd/682eccf8d6c5e3ed3e5df02dab272608?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gsaUEypJgaLt4Rm92q16YmLG1S5ddUqZR0EJdBjIGjqEmyqVp4GvAuA791IgNsoBlV1fKQcjtxL593T~JGg2xK8fPgCO7EENVKouz2qvgQOuW8QN4fRnPbvpyx4Z2iAnrBZwR5vtoBHhsJ3ou5Gk21Ar48Jb94XjSSbfH-3ZOXVjNGontki45lz63O7QwPnqLsj29V~-3jXjxvYzURURXo3Ue0dBfVNCuaEnHEeMTIMifNEZHCq0Bf3doLYukh2~IVhlIhKwLG-GDcRw0zcv7-m2AUzxAFM43d7pnChczj--ZfHNkwpnZmTQ8R53SNqImUJBO4jiGRI1DbjQXLvxRw__'
        />
      </a>
    </div>
  )
}

export default HeaderLogo