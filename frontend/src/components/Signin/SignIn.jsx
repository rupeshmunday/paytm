import { Heading } from "./SubComponents/heading"
import { SubHeading } from "./SubComponents/sub-heading"
import { InputBox } from "./SubComponents/inpuBox"
import { ButtonComponent } from "./SubComponents/button"
import { BottomWarning } from "./SubComponents/bottomWarning"

export default function SignIn(){
    return <div className="p-2.5 bg-gray-900 h-screen w-screen flex justify-center items-center">
        <div className="border-2 border-radius rounded-lg bg-white pt-10 w-full min-[340px]:w-[318px]">
            <Heading heading={'Sign in'}></Heading>
            <SubHeading description={'Enter your credentials to access your account'}></SubHeading>
            <InputBox heading={'Email'} title={'abc1@xyz.com'} type={'email'}></InputBox>
            <InputBox heading={'Password'} title={'123456'} type={'password'}></InputBox>
            <ButtonComponent type={'submit'} title={'Sign In'}></ButtonComponent>
            <BottomWarning text={`Don't have an account?`} link={'Sign up'}></BottomWarning>
        </div>
    </div>
}