import styles from "./style"
const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={'${styles.paddingX} ${styles.flexCentre}'}>
        <div className={'${styles.boxWidth}'}>
      Navbar
        </div>
      </div>
    <div className={'bg-primary ${styles.flexStart}'}>
     <div className={'${styles.boxWidth}'}>
    Hero
     </div>
    </div>
    <div className={'bg-primary ${styles.flexStart} ${styles.paddingX}'}>
     <div className={'${styles.boxWidth}'}>
      Stats 
      Businesss 
      Billing 
      CardDeal 
      Testimonials
      Clients 
      CTA 
      Footer 

     </div>
    </div>
    </div>
  );
 
export default App