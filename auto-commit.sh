now=$(date +"%T")
echo "Current time : $now"
git add .
git commit -m "$now - autocommit"
git push