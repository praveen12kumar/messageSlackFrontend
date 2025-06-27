// Layout for Auth related pages

const Auth = ({children}) => {
    return (
        <div className="h-dvh flex items-center justify-center bg-slack">

            <div className="md:h-auto md:w-1/3">
                {children}
            </div>

        </div>
    );
};

export default Auth;