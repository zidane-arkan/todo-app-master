import Error403 from '../../img/Error403.png';

function ErrorServer() {
    return (
        <div className="flex flex-col items-center w-full mx-auto text-center pt-8 pb-16">
            <h2 className="text-lg font-medium pb-8">
                Ooops! You Have an Error, Please Contact <a className="text-blue-500" href="https://wa.me/6282278575979?text=" target="_blank">@Zidane</a>
            </h2>
            <img src={Error403} className="img-responsive pt-2" width="700px" alt="Bad Reequest" />
        </div>
    );
}

export default ErrorServer;