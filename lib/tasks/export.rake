namespace :export do
  desc "Prints Project.all in a seeds.rb way."
  task :seeds_format => :environment do
    Project.order(:id).all.each do |project|
      puts "Project.create(#{project.serializable_hash.delete_if {|key, value| ['created_at','updated_at','id'].include?(key)}.to_s.gsub(/[{}]/,'')})"
    end
  end
end