now=$(date +"%T")
echo "Current time : $now"
git add .
git commit -m "$now - Bootcamp RocketSeat - Autocommit"
git push