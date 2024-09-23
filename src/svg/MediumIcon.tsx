type Props = {
    color?: string
}

const MediumIcon = ({ color = "#A7D4EE" }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="20px" height="20px" fill-rule="nonzero"><g fill={color} fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M15,14c6.065,0 11,4.935 11,11c0,6.065 -4.935,11 -11,11c-6.065,0 -11,-4.935 -11,-11c0,-6.065 4.935,-11 11,-11M15,12c-7.18,0 -13,5.82 -13,13c0,7.18 5.82,13 13,13c7.18,0 13,-5.82 13,-13c0,-7.18 -5.82,-13 -13,-13zM35.5,15c2.124,0 4.5,4.277 4.5,10c0,5.723 -2.376,10 -4.5,10c-2.124,0 -4.5,-4.277 -4.5,-10c0,-5.723 2.376,-10 4.5,-10M35.5,13c-3.59,0 -6.5,5.373 -6.5,12c0,6.627 2.91,12 6.5,12c3.59,0 6.5,-5.373 6.5,-12c0,-6.627 -2.91,-12 -6.5,-12zM46.377,15.667h0.005h-0.005M45.5,18.577c0.28,1.581 0.5,3.75 0.5,6.423c0,2.673 -0.22,4.842 -0.5,6.423c-0.28,-1.581 -0.5,-3.75 -0.5,-6.423c0,-2.673 0.22,-4.842 0.5,-6.423M45.5,14c-1.381,0 -2.5,4.925 -2.5,11c0,6.075 1.119,11 2.5,11c1.381,0 2.5,-4.925 2.5,-11c0,-6.075 -1.119,-11 -2.5,-11z"></path></g></g></svg>
    )
}

export default MediumIcon;