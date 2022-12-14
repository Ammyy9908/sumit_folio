import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'



function SkillComponent({image,heading,subheading}){
  return <div className={`${styles.skill_component} w-full flex flex-col items-center py-12 px-6 gap-3`}>
    <img src={image} alt="skill_image" />
    
    <div className="skill_body mt-12 w-full text-center">
    <h3 className='dark:text-white'>{heading}</h3>
    <p className='dark:text-white/50 '>{subheading}</p>
    </div>
        </div>
}


function WorkComponent({image,title,tags}){
  return <div className={`${styles.work_component} flex flex-col items-center gap-3`}>
    <div className="work_thumb w-full h-[300px] md:h-[350px]  overflow-hidden relative cursor-pointer rounded-md">
    <img src={image} alt="work_image" className='w-full h-full  absolute inset-0 hover:scale-110 rounded-md'/>
   
    </div>
    <div className="work_body w-full text-left py-3">
    <h3 className='dark:text-white text-xl'>{title}</h3>
    <p className='dark:text-white/50 '>{tags}</p>
    </div>
        </div>

}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextFolio</title>
        <meta name="description" content="Made in NextJs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <div className="hero-section py-16">
        <div className={`${styles.hero_section_wrapper} mx-auto flex flex-col md:flex-row  items-start justify-between`}>
          <div className="hero-section-text">
            <p style={{
              fontFamily: 'Eblque-Semi-Bold',
              fontSize:20
            }} className="dark:text-white">Branding | Image making </p>
            <h1 style={{
              fontFamily: 'Eblque-Semi-Bold'
              ,marginTop:46,
              fontWeight:600,
              marginBottom:50
            }}

            className="dark:text-white md:w-[453px]"
            
            >Visual Designer</h1>
            <p style={{
              fontFamily: 'Eblque-Regular'
            }}
              className="w-full md:w-[453px] dark:text-white/90"
            
            >This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
          </div>
          <div className="hero-text-media mt-12">
            <img src="/assets/hero__big__image.png" alt="big__image" />
          </div>
        </div>
      </div>

      <div className={`${styles.brands_section} py-12 mx-auto`}>
        <div className="brand_section_wrapper w-full">
          <ul className='w-full  items-center justify-between flex md:flex-row flex-col gap-12'>
            <li>
              
              <img src="/assets/google.png" alt="google" className='dark:hidden' />
              <img src="/assets/dark_google.png" alt="google" className='hidden dark:block'/>
              
              </li>
            <li><img src="/assets/nike.png" alt="nike" className='dark:hidden' />
              <img src="/assets/dark_nike.png" alt="nike" className='hidden dark:block'/></li>
              <li><img src="/assets/samsung.png" alt="samsung" className='dark:hidden' />
              <img src="/assets/dark_samsung.png" alt="samsung" className='hidden dark:block'/></li>
              <li><img src="/assets/apple.png" alt="apple" className='dark:hidden' />
              <img src="/assets/dark_apple.png" alt="apple" className='hidden dark:block'/></li>
              <li><img src="/assets/intercom.png" alt="intercom" className='dark:hidden' />
              <img src="/assets/dark_intercom.png" alt="intercom" className='hidden dark:block'/></li>
              <li><img src="/assets/adidas.png" alt="adidas" className='dark:hidden' />
              <img src="/assets/dark_adidas.png" alt="adidas" className='hidden dark:block'/></li>
          </ul>
        </div>
      </div>

      <div className={`${styles.skill_section} py-12 mx-auto`}>
        <div className="dark:hidden skill_section_wrapper w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <SkillComponent image="/assets/product_design.png" heading="Product design" subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
              <SkillComponent image="/assets/art_direction.png" heading="Art direction" subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
              <SkillComponent image="/assets/visual_design.png" heading="Visual design" subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
        </div>
        <div className="hidden dark:grid skill_section_wrapper w-full   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <SkillComponent image="/assets/dark_product_design.png" heading="Product design" subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
              <SkillComponent image="/assets/dark_art_direction.png" heading="Art direction" subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
              <SkillComponent image="/assets/dark_visual_design.png" heading="Visual design" subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"/>
        </div>
      </div>


      <div className={`${styles.work_section} py-12 mx-auto`}>
        <div className="work_section_wrapper w-full">
          <div className="work_header text-center mb-12">
            <h3 className='text-2xl dark:text-white'>Latest work</h3>
          </div>
          <div className="works w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <WorkComponent image="/assets/work1.png" title="Project 1" tags="UI,Art,direction"/>
              <WorkComponent image="/assets/work2.png" title="Project 1" tags="UI,Art,direction"/>
              <WorkComponent image="/assets/work3.png" title="Project 1" tags="UI,Art,direction"/>
              <WorkComponent image="/assets/work4.png" title="Project 1" tags="UI,Art,direction"/>
              <WorkComponent image="/assets/work5.png" title="Project 1" tags="UI,Art,direction"/>
              <WorkComponent image="/assets/work6.png" title="Project 1" tags="UI,Art,direction"/>
          </div>
        </div>
      </div>

      <Footer/>

      

      
    </div>
  )
}
