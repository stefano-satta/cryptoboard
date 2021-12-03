import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const useLoadingPage = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleLoadingOnChangeRouting = () => {
        router.events.on('routeChangeStart', () => setLoading(true));
        router.events.on('routeChangeComplete', () => setLoading(false));
        router.events.on('routeChangeError', () => setLoading(false));
    }


    return {isLoading, handleLoadingOnChangeRouting}

}

export default useLoadingPage;