import styled from './styles.module.scss';


interface SubscripButtonProps {
    priceId: string;
}

export function SubscripButton({ priceId }: SubscripButtonProps) {

    return(
        <button
            type="button"
            className={styled.subscripButton}
        >
            Subscrib Now
        </button>
    )

}