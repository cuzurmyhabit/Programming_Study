function Button(props) {
    console.log(props)
    const { children, ...rest } = props;

    return (
        <button {...rest}>{children}</button>
    );
}

export default Button;