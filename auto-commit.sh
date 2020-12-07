
while :
do
  sleep 5 &
  now=$(date +"%T")
  git add .
  git commit -m "$now - Bootcamp RocketSeat - Autocommit"
  git push
  echo "Autocommit finished."
  wait
done
