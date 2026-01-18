function Comp1() {
    return (
        <>
            <p> error boundary არის ყუთივით სადაც ინახება ერთი კომპონენტის error და იცავს აპპს error ისგან</p>
            <p>getDerivedStateFromError - როცა შვილ კომპონენტში ხდება შეცდომა შეცდომის დაფიქსირებისთანავე state-ის შეცვლას ემსახურება</p>
            <p>componentDidCatch error–ის დეტალური ინფორმაციის დასამუშავებლად</p>
            <p>reset - Error Boundary-ის დასარესტარტებლად</p>
        </>
    );
}

export default Comp1;