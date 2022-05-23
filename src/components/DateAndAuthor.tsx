const DateAndAuthor = ({
  publishedAt,
  formattedDate,
  className,
}: DateAndAuthorProps) => (
  <p className={className}>
    <time dateTime={publishedAt}>{formattedDate}</time>
  </p>
)
export default DateAndAuthor

export type DateAndAuthorProps = {
  publishedAt: string
  formattedDate: string
  className?: string
}
