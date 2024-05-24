import RightSidebar from '@/components/RightSidebar'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: "Sohom", lastName: "Pal", email: 'sohompal21@gmail.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = 'greeting'
            title = 'Welcome'
            user = {loggedIn?.firstName || "Guest"}
            subtext = "Access and manage your accounts, transactions, and finances efficently"
          />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {69420.55}
          />
          
        </header>
        RECENT TRANSACTIONS
      </div>

     <RightSidebar
      user = {loggedIn}
      transactions = {[]}
      banks = {[{}, {}]}
     /> 


    </section>
  )
}

export default Home