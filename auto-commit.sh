now=$(date +"%T")
echo "Current time : $now"
git add .
git commit -m "$date - autocommit"
git push